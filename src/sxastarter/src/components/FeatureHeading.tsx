import React from 'react'
import Heading from './controls/Heading';

function FeatureHeading() {
  return (
    <section id="features">
      <Heading componentClass='container mx-auto mt-16 px-6' h2Class='mb-6 text-4xl font-semibold text-center'
        pClass='max-w-md mx-auto text-center text-grayishBlue' title='Features' desc='Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go'></Heading>      
    </section>
  )
}

export default FeatureHeading;