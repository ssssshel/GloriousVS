import useSWR from "swr";

async function fetcher(url) {
  let user
  const res = await fetch(url).then((res) => { user = res.json(); return user }).catch((error) => { return error })
  return res
}

export default function useUser(userId) {
  const { data: user, error } = useSWR(`/api/users/${userId}`, fetcher)

  return {
    user: user,
    isError: error
  }
}