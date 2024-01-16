// components/Protected.js
import UserDetails from '../components/userdetails';
import CreateBrewForm from '../components/createbrew';
import DashboardLayout from '../components/dashboard';

export function CreateBrew() {

  return (
    <DashboardLayout>
      <CreateBrewForm/>
    </DashboardLayout>
  );
}
export default CreateBrew;