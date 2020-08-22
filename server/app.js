socket.on('SEND_SDP', function (data) {
    data.sdp.id = socket.id;
    if (data.target) {
        socket.to(data.target).emit('RECEIVE_SDP', data.sdp);
    } else {
        socket.broadcast.to(socket.roomname).emit('RECEIVE_SDP', data.sdp);
    }
});


socket.on('SEND_CANDIDATE', function (data) {
    if (data.target) {
        data.ice.id = socket.id;
        socket.to(data.target).emit('RECEIVE_CANDIDATE', data.ice);
    } else {
        console.log('candidate need target id');
    }
});
