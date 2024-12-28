import {writable} from 'svelte/store';

export const UserAuthStore = writable({
    "session-expiration":"",
    "session-token":"",
    "user":{}
});

export const CurrentWatchlist = writable(-1);
export const Watchlists = writable([]);
