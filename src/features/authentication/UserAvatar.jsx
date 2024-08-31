import useUser from "./useUser"

function UserAvatar() {
    const{user}=useUser()
  return (
    <div className="flex items-center justify-between gap-x-2">
        <img src="/user.jpg" alt="user Avatar" className="w-4 h-4 md:w-7 md:h-7 rounded-full" />
        <span className="text-secondary-600 font-bold text-[12px] md:text-sm">{user?.name}</span>
    </div>
  )
}
export default UserAvatar