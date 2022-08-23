import Form from './Form';

const MakeAppt = () => {
  return(
    <div id="package-details">
      <Form />
      <div id="package-1">
        <h1 className="text-lg">Our Service Packages</h1>
          <h2>Basic Haircut</h2>
            <p>A shampoo and a standard haircut from our style book.</p>
          <h2>Shave and a Haircut</h2>
            <p>A shampoo and a haircut from our style book, then a hot towel and a facial hair styling.</p>
          <h2>Deluxe Makeover</h2>
            <p>Includes a shave and cut. Our barbers will work to elevate your style with any photos or style references you provide.</p>
        
      </div>
    </div>
  )
}

export default MakeAppt;