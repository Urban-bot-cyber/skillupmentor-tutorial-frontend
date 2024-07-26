import { FC, ReactNode } from 'react'
import SideBar from './SideBar'
import TopBar from 'components/ui/TopBar'

interface Props{
    children:ReactNode | ReactNode[]
}

const DashboardLayout: FC<Props> = ({ children }) => {
    return(
        <>
        <div className="d-flex">
            <SideBar/>
            <TopBar/>
        </div>
        <div className="p-4">{children}</div>
        </>
    )
}

export default DashboardLayout