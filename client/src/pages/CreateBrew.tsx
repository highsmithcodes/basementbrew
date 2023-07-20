// components/Protected.js
import UserDetails from '../components/UserDetails';
import CreateBrewForm from '../components/CreateBrew';

export function CreateBrew() {

  return (
    <div className="">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center md:pr-5 lg:pr-5 xl:pr-5">
            <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">      
          <div className='py-20'>
            <CreateBrewForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateBrew;