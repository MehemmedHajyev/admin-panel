import { MapContainer , TileLayer , Marker , Popup  } from "react-leaflet";



const LeafLetMap = () => {
    const position = [51.505, -0.09]

    return (
       <div  className="w-100 position-relative overflow-hidden">
        <MapContainer style={{width:'100%' , height:'500px'}} center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
       </div>
    )
}

export default LeafLetMap