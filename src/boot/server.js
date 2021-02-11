// Create an account on Viagenie, and replace credential and username with the information from your account
var servers = {
  'iceServers': [
    { 'urls': 'stun:stun.services.mozilla.com' },
    // { 'urls': "stun:stun01.sipphone.com" },
    // { 'urls': "stun:stun.ekiga.net" },
    // { 'urls': "stun:stun.fwdnet.net" },
    // { 'urls': "stun:stun.ideasip.com" },
    // { 'urls': "stun:stun.iptel.org" },
    // { 'urls': "stun:stun.rixtelecom.se" },
    // { 'urls': "stun:stun.schlund.de" },
    // { 'urls': "stun:stun.l.google.com:19302" },
    // { 'urls': "stun:stun1.l.google.com:19302" },
    // { 'urls': "stun:stun2.l.google.com:19302" },
    // { 'urls': "stun:stun3.l.google.com:19302" },
    // { 'urls': "stun:stun4.l.google.com:19302" },
    // { 'urls': "stun:stunserver.org" },
    // { 'urls': "stun:stun.softjoys.com" },
    // { 'urls': "stun:stun.voiparound.com" },
    // { 'urls': "stun:stun.voipbuster.com" },
    // { 'urls': "stun:stun.voipstunt.com" },
    // { 'urls': "stun:stun.voxgratia.org" },
    // { 'urls': "stun:stun.xten.com" },
    {
      'urls': 'turn:numb.viagenie.ca',
      'credential': `${process.env.CREDENTIAL}`,
      'username': `${process.env.USERNAME}`,
    },
    {
      'urls': "turn:192.158.29.39:3478?transport=udp",
      'credential': "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
      'username': "28224511:1379330808"
    },
    // {
    //   'urls': "turn:192.158.29.39:3478?transport=tcp",
    //   'credential': "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
    //   'username': "28224511:1379330808"
    // }
  ]
};

export { servers }
