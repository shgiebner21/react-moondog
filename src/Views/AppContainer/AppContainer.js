import React, { Component } from 'react'
import Papa from 'papaparse'

import Automotive from './Automotive'


export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    // I chose manual manipulation for csvHeaderString and csvBodyString here because I am not comfortable assuming
    // that the first column will always be date.  If I do this dynmically and the columns shift, we could end up
    // with bad data without knowing it.

    // Question for Project Manager; there are SEVEN "Interests Me?" in the file.  They are not specifically identified
    // as belonging to any particular product.  For now, I am grouping with the product to the right of each one.
    // This needs to be validated as correct.

    this.state = {
      csvHeaderString: `Date,DeviceName,MAC,Name,Email,CompanyName,Box Truck Click Count,Boom Truck Click Count,Service Truck Click Count,Box Truck - Sidewall Bonding Click Count,Interests Me?,Box Truck - Roof Bonding Click Count,Interests Me?,Box Truck - Door Closures Click Count,Interests Me?,Boom Truck - Seam Sealing Click Count,Interests Me?,Boom Truck - Plastic Bonding Click Count,Interests Me?,Boom Truck - Metal Bonding Click Count,Interests Me?,Boom Truck - Rivet/Weld Reduction Click Count,Interests Me?,Service Truck - Sidewall Bonding Click Count,Interests Me?,Service Truck - Roof Bonding Click Count,Interests Me?,Service Truck - Inserts Click Count,Interests Me?,Service Truck - Door Closures Click Count,Interests Me?,`,
      csvBobyString: `2019/03/15 05:15:54 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,1,no,1,no,1,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      Date,DeviceName,MAC,Name,Email,Company Name,Box Truck Click Count,Boom Truck Click Count,Service Truck Click Count,Box Truck - Sidewall Bonding Click Count,Interests Me?,Box Truck - Roof Bonding Click Count,Interests Me?,Box Truck - Door Closures Click Count,Interests Me?,Boom Truck - Seam Sealing Click Count,Interests Me?,Boom Truck - Plastic Bonding Click Count,Interests Me?,Boom Truck - Metal Bonding Click Count,Interests Me?,Boom Truck - Rivet/Weld Reduction Click Count,Interests Me?,Service Truck - Sidewall Bonding Click Count,Interests Me?,Service Truck - Roof Bonding Click Count,Interests Me?,Service Truck - Inserts Click Count,Interests Me?,Service Truck - Door Closures Click Count,Interests Me?,
      2019/03/15 05:15:54 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,1,no,1,no,1,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      Date,DeviceName,MAC,Name,Email,Company Name,Box Truck Click Count,Boom Truck Click Count,Service Truck Click Count,Box Truck - Sidewall Bonding Click Count,Interests Me?,Box Truck - Roof Bonding Click Count,Interests Me?,Box Truck - Door Closures Click Count,Interests Me?,Boom Truck - Seam Sealing Click Count,Interests Me?,Boom Truck - Plastic Bonding Click Count,Interests Me?,Boom Truck - Metal Bonding Click Count,Interests Me?,Boom Truck - Rivet/Weld Reduction Click Count,Interests Me?,Service Truck - Sidewall Bonding Click Count,Interests Me?,Service Truck - Roof Bonding Click Count,Interests Me?,Service Truck - Inserts Click Count,Interests Me?,Service Truck - Door Closures Click Count,Interests Me?,
      2019/03/15 05:15:54 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,1,no,1,no,1,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      Date,DeviceName,MAC,Name,Email,Company Name,Box Truck Click Count,Boom Truck Click Count,Service Truck Click Count,Box Truck - Sidewall Bonding Click Count,Interests Me?,Box Truck - Roof Bonding Click Count,Interests Me?,Box Truck - Door Closures Click Count,Interests Me?,Boom Truck - Seam Sealing Click Count,Interests Me?,Boom Truck - Plastic Bonding Click Count,Interests Me?,Boom Truck - Metal Bonding Click Count,Interests Me?,Boom Truck - Rivet/Weld Reduction Click Count,Interests Me?,Service Truck - Sidewall Bonding Click Count,Interests Me?,Service Truck - Roof Bonding Click Count,Interests Me?,Service Truck - Inserts Click Count,Interests Me?,Service Truck - Door Closures Click Count,Interests Me?,
      2019/03/15 05:15:54 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,1,no,1,no,1,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 01:57:23 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:04:24 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,0,0,0,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:09:40 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Ben,b@h.b,Gth,2,1,1,2,yes,2,yes,2,no,0,no,0,no,1,yes,1,yes,0,no,1,yes,0,no,0,no,
      2019/03/18 02:13:35 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,0,1,0,0,no,0,no,0,no,0,no,0,no,1,yes,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:13:58 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Jugg,h@j.o,Hygg,1,0,0,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:19:14 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:19:30 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,0,0,0,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:23:42 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,2,no,4,no,2,yes,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 02:27:49 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,1,no,0,no,1,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,
      2019/03/18 03:17:13 -04:00,iPad,7D84EA30-33AA-40B9-973D-AF2BDD5E966E,Bypass User,--,--,1,0,0,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,0,no,`,
      data: []
    }
  }

  componentWillMount() {
    let rawHeaderString = this.state.csvHeaderString.replace(/\s+/g, '')  //Remove spaces from Header strings

    //Open Item for Project Manager
    //ALL of the below block is an attempt to replace "InterestsMe?" with a specific Product as noted above.

    let rawHeaderString1 = rawHeaderString.replace(/\bInterestsMe\b/, 'BoxTrkSidewallBondingInterestsMe')
    let rawHeaderString2 = rawHeaderString1.replace(/\bInterestsMe\b/, 'BoxTrkRoofBondingInterestsMe')
    let rawHeaderString3 = rawHeaderString2.replace(/\bInterestsMe\b/, 'BoxTrkDoorClosuresInterestsMe')
    let rawHeaderString4 = rawHeaderString3.replace(/\bInterestsMe\b/, 'SeamSealingInterestsMe')
    let rawHeaderString5 = rawHeaderString4.replace(/\bInterestsMe\b/, 'PlasticBondingInterestsMe')
    let rawHeaderString6 = rawHeaderString5.replace(/\bInterestsMe\b/, 'MetalBondingInterestsMe')
    let rawHeaderString7 = rawHeaderString6.replace(/\bInterestsMe\b/, 'RivetWeldInterestsMe')
    let rawHeaderString8 = rawHeaderString7.replace(/\bInterestsMe\b/, 'ServiceTrkSidewallBondingInterestsMe')
    let rawHeaderString9 = rawHeaderString8.replace(/\bInterestsMe\b/, 'ServiceTrkRoofBondingInterestsMe')
    let rawHeaderString10 = rawHeaderString9.replace(/\bInterestsMe\b/, 'ServiceTrkInsertsInterestsMe')
    let rawHeaderString11 = rawHeaderString10.replace(/\bInterestsMe\b/, 'ServiceTrkDoorClosuresInterestsMe')
    

    let rawHeaderString12 = rawHeaderString11.replace(/-/g, '')           //Remove "-" from Header strings
    let cleanHeaderString = rawHeaderString12.replace(/\?/g, '')           //Remove "?" from Header strings
    
    let cleanString = cleanHeaderString + this.state.csvBobyString

    let csvData = Papa.parse(cleanString, {  // Fix this...!  Need error handling too!
      delimiter: ",",
      header: true,
      dynamicTyping: true,
      fields: ['Date', 'DeviceName', 'MAC', 'Name', 'Email', 'Company Name', 'Box Truck Click Count', 'Boom Truck Click Count', 
              'Service Truck Click Count', 'Box Truck - Sidewall Bonding Click Count', 'Interests Me?', 'Box Truck - Roof Bonding Click Count', 
              'Interests Me?', 'Box Truck - Door Closures Click Count', 'Interests Me?', 'Boom Truck - Seam Sealing Click Count', 'Interests Me?', 
              'Boom Truck - Plastic Bonding Click Count', 'Interests Me?', 'Boom Truck - Metal Bonding Click Count', 'Interests Me?', 
              'Boom Truck - Rivet/Weld Reduction Click Count', 'Interests Me?', 'Service Truck - Sidewall Bonding Click Count', 'Interests Me?', 
              'Service Truck - Roof Bonding Click Count', 'Interests Me?', 'Service Truck - Inserts Click Count', 'Interests Me?', 
              'Service Truck - Door Closures Click Count', 'Interests Me?']
    })

    this.setState({ data: csvData })
  }


  render() {
    const { data } = this.state.data

    let csvData = data.filter(item => item.DeviceName !== 'DeviceName' )  // remove objects that contain column names from array

    return (
      <Automotive data={csvData} />
    )

  }

}