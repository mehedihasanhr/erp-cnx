'use client';
import MainDashboard from '@/components/sections/dashboard/Dashboard';
import Navbar from '@/components/sections/navbar/Navbar';
import SidebarContainer from '@/components/sections/sidebar/SidebarContainer';

export default function Dashboard() {
    return (
        <div className="">
            <div className="flex transition-all">
                <SidebarContainer />

                <div className={`w-full transition-all overflow-x-hidden`}>
                    <Navbar />
                    <MainDashboard />
                </div>
            </div>
        </div>
    );
}
