import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlay: false,
    isRadioPlay: false,
    isMute: false,
    songId: localStorage.getItem('songId') || '',
    playlistId: localStorage.getItem('playlistId') || '',
    currnetIndexPlaylist: 0,
    infoSongPlayer: JSON.parse(localStorage.getItem('songInfo')),
    srcAudio: '',
    srcRadio: '',
    currentTime: 0,
    duration: 0,
    volume: JSON.parse(localStorage.getItem('volume')) || 100,
    isLoop: JSON.parse(localStorage.getItem('loop')) || false,
    isRandom: localStorage.getItem('random') || false,
    autoPlay: false,
    playlistSong: JSON.parse(localStorage.getItem('playlistSong')) || [],
    prevSong: [],
    isLyric: false,
};

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setIsPlay: (state, action) => {
            state.isPlay = action.payload;
        },
        setIsRadioPlay: (state, action) => {
            state.isRadioPlay = action.payload;
        },
        changeIconVolume: (state, action) => {
            state.isMute = action.payload;
        },
        setSongId: (state, action) => {
            state.songId = action.payload;
            localStorage.setItem('songId', action.payload);
        },
        setPlaylistId: (state, action) => {
            state.playlistId = action.payload;
            localStorage.setItem('playlistId', action.payload);
        },
        setInfoSongPlayer: (state, action) => {
            state.infoSongPlayer = { ...action.payload };
            localStorage.setItem('songInfo', JSON.stringify({ ...action.payload }));
        },
        setSrcAudio: (state, action) => {
            state.srcAudio = action.payload;
        },
        setSrcRadio: (state, action) => {
            state.srcRadio = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
            localStorage.setItem('volume', JSON.stringify(action.payload));
        },
        setLoop: (state, action) => {
            state.isLoop = action.payload;
            localStorage.setItem('loop', action.payload);
        },
        setAutoPlay: (state, action) => {
            state.autoPlay = action.payload;
        },
        setPlaylistSong: (state, action) => {
            state.playlistSong = action.payload;
            localStorage.setItem('playlistSong', JSON.stringify(action.payload));
        },
        setCurrnetIndexPlaylist: (state, action) => {
            state.currnetIndexPlaylist = action.payload;
        },
        setOpenLyric: (state, action) => {
            state.isLyric = action.payload;
        },
        setPrevSong: (state, action) => {
            state.prevSong = action.payload;
        },
        setRandom: (state, action) => {
            state.isRandom = action.payload;
            localStorage.setItem('random', action.payload);
        },
    },
});

export const {
    setIsPlay,
    changeIconVolume,
    setSongId,
    setInfoSongPlayer,
    setCurrentTime,
    setDuration,
    setVolume,
    setLoop,
    setSrcAudio,
    setAutoPlay,
    setPlaylistSong,
    setCurrnetIndexPlaylist,
    setOpenLyric,
    setRandom,
    setPrevSong,
    setPlaylistId,
    setSrcRadio,
    setIsRadioPlay,
} = audioSlice.actions;
export default audioSlice.reducer;