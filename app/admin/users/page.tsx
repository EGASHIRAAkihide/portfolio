import Image from 'next/image'

type User = {
  id: number
  name: string
  createdAt: string
  avatar: string
}

export default async function Page() {
  const data = await fetch('https://670cd6887e5a228ec1d1950d.mockapi.io/api/v1/users')
  const users: User[] = await data.json()

  return (
    <div>
      <p>TODO: 内部ユーザーのみがアクセスできるようにする</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>user.name: {user.name}</div>
            <div>user.createdAt: {user.createdAt}</div>
            <Image src={user.avatar} alt={user.name} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  )
}