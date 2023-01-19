import Image from 'next/image'
const Model = () => {
  return (
    <>
      <div
        style={{
          background: '#111215',
          position: 'fixed',
          height: '100%',
          width: '100%',
        }}

      >
        <model-viewer
          src="/e.glb"
          ios-src="/e.usdz"
          // shadow-intensity="1"
          ar-modes="webxr scene-viewer quick-look"
          ar=""
          xr=""
          var=""
          loading=""
          controls=""
          autoplay=""
          animation=""
          magic-leap=""
          auto-rotate=""
          unstable-webxr=""
          camera-controls=""
          id="model-viewer"
          animation-name="Running"
          alt="A 3D model carousel"
      // className="obj"
        ></model-viewer>
      </div>
    </>
  )
}

export default Model
