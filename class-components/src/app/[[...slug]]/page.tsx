import '../../styles/index.scss'
import { ClientOnly } from './client'

export function GenerateStaticParams() {
  return [{ slug: [''] }]
}

export default function Page() {
  return <ClientOnly />
}
