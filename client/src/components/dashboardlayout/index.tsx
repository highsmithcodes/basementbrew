import UserDetails from '../userdetails';
import Navigation from '../navigation';

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row h-full">
        <div className="w-full md:w-1/6 lg:w-1/6 xl:w-1/6 pt-0 flex-col justify-center items-center py-5">
          <div className='drop-shadow-md bg-dark-blue lg:h-screen flex flex-col justify-between'>
            <Navigation />
            <UserDetails />
          </div>
        </div>
        <div className="item2 w-full w-5/6 md:w-5/6 lg:w-5/6 lx:w-5/6 bg-custom-white">
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
