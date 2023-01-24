import Link from "next/link"

const urls = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/about',
    name: 'About'
  }
]

export default function Navar() {
  return (
    <div>
      <ul>
        {urls.map(url => (
          <li key={url.href}>
            <Link className="underline" href={url.href}>{url.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
