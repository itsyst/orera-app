<template>
  <q-page class="full-width">
    <q-banner
      v-if="error"
      class="bg-red-1 text-center text-red text-bold fixed-top"
      >{{ error }}</q-banner
    >
    <video class="localUser" ref="localVideo" autoplay playsinline />
    <div class="button row justify-center">
      <q-btn
        v-if="!hangupButton"
        round
        color="secondary"
        icon="videocam"
        @click="makeCall"
      />
      <q-btn
        v-if="hangupButton"
        round
        color="primary"
        icon="videocam_off"
        @click="turnOffRemoteVideo"
      />
    </div>
    <div color="transparent" @click="confirm" />
    <video class="remoteUser" ref="remoteVideo" autoplay playsinline />
  </q-page>
</template>

<script>
import adapter from "webrtc-adapter";

import { firebaseDb } from "boot/firebase";
import { servers } from "boot/server";

let peerConnection = new RTCPeerConnection(servers);
let roomId = Math.floor(Math.random() * 1000000000);

export default {
  data() {
    return {
      error: "",
      hangupButton: false
    };
  },
  methods: {
    sendMessage(senderId, data) {
      let msg = firebaseDb
        .ref("videos")
        .push({ sender: senderId, message: data });
      msg.remove();
    },

    readMessage(data) {
      let msg = JSON.parse(data.val().message);
      let sender = data.val().sender;
      if (sender != roomId) {

        if (msg.ice != undefined) {
          peerConnection.addIceCandidate(new RTCIceCandidate(msg.ice));
        } else if (msg.sdp.type == "offer") {
          peerConnection
            .setRemoteDescription(new RTCSessionDescription(msg.sdp))
            .then(() => peerConnection.createAnswer())
            .then(answer => peerConnection.setLocalDescription(answer))
            .then(() =>
              this.sendMessage(
                roomId,
                JSON.stringify({ sdp: peerConnection.localDescription })
              )
            )
            .catch(
              error => (this.error = "A connection could not be established!")
            );
        } else if (msg.sdp.type == "answer") {
         
          peerConnection.setRemoteDescription(
            new RTCSessionDescription(msg.sdp)
          );
        }
      }
    },
    startCamera() {
      const constraints = {
        video: {
          width: { ideal: 4096 },
          height: { ideal: 2160 },
          facingMode: "user"
        },
        audio: {
          sampleSize: 16,
          volume: 0.2,
          channelCount: {
            ideal: 2
          },
          autoGainControl: false,
          echoCancellation: true,
          noiseSuppression: true
        }
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => (this.$refs.localVideo.srcObject = stream))
        .then(stream => peerConnection.addStream(stream))
        .catch(
          error =>
            (this.error = "Something went wrong, please refresh the page!")
        );
    },
    makeCall() {
      peerConnection
        .createOffer()
        .then(offer => peerConnection.setLocalDescription(offer))
        .then(() =>
          this.sendMessage(
            roomId,
            JSON.stringify({ sdp: peerConnection.localDescription })
          )
        )
        .catch(error => {
          return (this.error =
            "Something went wrong, please refresh and call again!");
        });
      this.hangupButton = true;
    },

    turnOffRemoteVideo() {
      try {
        const stream = this.$refs.remoteVideo.srcObject;
        stream.getVideoTracks().forEach(track => {
          track.stop();
        });
        peerConnection.close();
        this.hangupButton = false;
      } catch (error) {
        return (this.error =
          "Something went wrong, please refresh and call again!");
      }
    },

    disableCamera() {
      const stream = this.$refs.localVideo.srcObject;
      stream.getVideoTracks().forEach(track => {
        track.stop();
      });
      stream.getAudioTracks().forEach(track => {
        track.stop();
      });
    },
    confirm() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to receive the call?",
          cancel: true,
          persistent: true
        })
        .onCancel(() => {
          this.turnOffRemoteVideo();
        });
    }
  },
  beforeMount() {
    firebaseDb.ref("videos").on("child_added", this.readMessage);
  },
  mounted() {
    this.startCamera();
    peerConnection.onicecandidate = event =>
      event.candidate
        ? this.sendMessage(roomId, JSON.stringify({ ice: event.candidate }))
        : console.log("Success"); // Seperat funktion och error på banner

    peerConnection.ontrack = ({ track, streams }) => {
      // once media for a remote track arrives, show it in the remote video element
      track.onunmute = () => {
        // don't set srcObject again if it is already set.
        if (this.$refs.remoteVideo.srcObject) return;
        this.confirm();
        this.$refs.remoteVideo.srcObject = streams[0];
        this.hangupButton = true;
      };
    };
  },
  beforeDestroy() {
    this.disableCamera();
    this.turnOffRemoteVideo();
  }
};
</script>
<style lang="scss" scoped>
.q-banner {
  width: 100%;
  margin: 0 auto;
  top: 50px;
  z-index: 2;
  opacity: 0.8;
}
.localUser {
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  position: absolute;
  object-fit: cover;
  @media (max-width: $breakpoint-sm-max) {
    top: 0;
    height: 50vh;
    width: 100%;
  }
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
    height: 100%;
  }
}
.q-btn {
  margin-top: 80vh;
  z-index: 2;
}
.remoteUser {
  bottom: 0;
  right: 0;
  height: 100%;
  width: 50%;
  position: absolute;
  object-fit: cover;
  z-index: 1;
  background: $dark;
  @media (max-width: $breakpoint-sm-max) {
    bottom: 0;
    height: 50vh;
    width: 100%;
  }
  @media (max-width: $breakpoint-xs-max) {
    top: 0;
    margin: 0.9rem;
    height: 40vh;
    width: 50vw;
  }
}
</style>
