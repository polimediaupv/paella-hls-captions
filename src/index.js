
export default function getHlsCaptionsPluginContext() {
    return require.context("./plugins", true, /\.js/)
}
