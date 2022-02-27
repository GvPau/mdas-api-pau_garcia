import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'
const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)
const env = process.env.NODE_ENV || 'dev'

// eslint-disable-next-line node/no-path-concat
loader.load(`${__dirname}/dependencies_${env}.yaml`)

export default container
