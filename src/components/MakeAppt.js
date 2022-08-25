import Form from './Form';
import Services from './Services';

const MakeAppt = ({ appointments, setAppointments}) => {
  return(
    <div id="package-details">
      <div className="pt-16 lg:py-12 lg:col-span-2">
        <p className="m-auto max-w-xl text-lg">
          Welcome to Clippy's! It looks like you're trying to elevate your style.
          Would you like to set up an appointment? 
        </p>

        <div>
          <p className="text-2xl font-bold text-pink-600"> 555 404 5555 </p>
          <address className="mt-2 not-italic">1998 Microsoft Dr. Los Altos, CA 94022</address>
        </div>
      </div>
      <Form appointments={ appointments } setAppointments={ setAppointments } />
      <Services />
    </div>
  )
}

export default MakeAppt;