import React from 'react'
import FormHeader from './controls/molecules/FormHeader';
import FormBody from './controls/molecules/FormBody';

function NewsLetter() {
  return (
    <section id="newsletter" className="bg-softBlue">
      {/* <!-- Main Container --> */}
      <div className="max-w-lg mx-auto py-24">
        <FormHeader title="35,000+ Already Joined" subTitle="Stay up-to-date with what we're doing"></FormHeader>        

        {/* <!-- Form --> */}
        <FormBody></FormBody>
      </div>
    </section>
  )
}

export default NewsLetter;