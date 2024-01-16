import UserDetails from '../userdetails';
import Navigation from '../navigation';

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row h-full">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center py-5 md:pr-5 lg:pr-5 xl:pr-5">
          <div className='drop-shadow-md bg-black p-5 lg:h-screen'>
            <UserDetails />
            <Navigation />
          </div>
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">
          <div className="py-20">
            <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
