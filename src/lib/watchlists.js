import { Watchlists, CurrentWatchlist } from '$lib/stores'
import { get } from 'svelte/store'

export const addWatchlist = name => {
    if( name=="" ) { alert("please provide a name for your new Watchlist"); return; }
    // add watchlist
    Watchlists.update(()=>{
      return [
        { name, symbols:[] },
        ...get(Watchlists)
        ];})
    CurrentWatchlist.update(() => 0 );
  };

export const setCurrentWatchlist = i => CurrentWatchlist.update(()=>i)

export const getCurrentWatchlist = () => get(CurrentWatchlist) >= 0 ?
    get(Watchlists)[get(CurrentWatchlist)] :
    false;

export const removeCurrentWatchlist = i => {
    Watchlists.update(()=>
        get(Watchlists).filter((_,j)=>i!==j));
    CurrentWatchlist.update(() => 0 );
}

export const updateCurrentWatchlist = fn =>
  Watchlists.update(()=>
    get(Watchlists).map( (watchlist, i) =>
        i != get(CurrentWatchlist) ?
        watchlist :
        fn(watchlist)
    )
  )

export const addSymbolToCurrentWatchlist = symbol =>
    updateCurrentWatchlist( watchlist => {
      watchlist.symbols.push(symbol);
      return watchlist;
    });

export const removeSymbolFromCurrentWatchlist = symbol =>
    updateCurrentWatchlist( watchlist => {
        watchlist.symbols = watchlist.symbols.filter(s=>s!==symbol);
      return watchlist;
    });
