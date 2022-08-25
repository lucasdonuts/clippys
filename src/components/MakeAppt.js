import Form from './Form';
import Services from './Services';

const MakeAppt = () => {
  return(
    <div id="package-details">
      <div className="pt-16 lg:py-12 lg:col-span-2">
        <p className="m-auto max-w-xl text-lg">
          Welcome to Clippy's! It looks like you're trying to elevate your style. Would you like to set up an appointment? 
        </p>

        <div>
          <p className="text-2xl font-bold text-pink-600"> 555 404 5555 </p>

          <address className="mt-2 not-italic">1998 Microsoft Dr. Los Altos, CA 94022</address>
        </div>
      </div>
      <Form />
      <Services />
      {/* <div id="package-1">
        <h1 className="text-lg">Our Service Packages</h1>
          <h2>Basic Haircut</h2>
            <p>A shampoo and a standard haircut from our style book.</p>
          <h2>Shave and a Haircut</h2>
            <p>A shampoo and a haircut from our style book, then a hot towel and a facial hair styling.</p>
          <h2>Deluxe Makeover</h2>
            <p>Includes a shave and cut. Our barbers will work to elevate your style with any photos or style references you provide.</p>
        
      </div> */}
    </div>
  )
}

export default MakeAppt;