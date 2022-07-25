import * as React from 'react'

const PageContainer = ({ pageTitle, children }) => {
  return (
    <>
        <h1 className='text-center pt-10 pb-4 text-3xl lg:text-4xl'>{pageTitle}</h1>
        <div class="m-4 p-4 rounded bg-white text-black">
            {children}
        </div>
    </>
  )
}
export default PageContainer