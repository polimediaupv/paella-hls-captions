import { Paella } from 'paella-core';
import getHlsCaptionsPluginContext from './index';

const initParams = {
	customPluginContext: [
		getHlsCaptionsPluginContext()
	]
};

let paella = new Paella('player-container', initParams);

paella.loadManifest()
	.then(() => console.log("done"))
	.catch(e => console.error(e));
