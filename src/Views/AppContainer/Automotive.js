import React, { Component } from 'react'
import moment from 'moment'

import './Automotive.css'

export default class Automotive extends Component {

// Key inside of showResults needs to be fixed.  Data is pretty simple, so duplicates are showing.


  render() {
    console.log('props are, ', this.props.data)


    const showResults = () => {
      return (
      this.props.data.map(item => 
        <div className="rTableRow" key={item.Date} >
          <div className="rTableCell" >{item.CompanyName}</div>
          <div className="rTableCell" >{item.Name}</div>
          <div className="rTableCell" >{item.Email}</div>
          <div className="rTableCell" >{item.Date}</div>
          <div className="rTableCell" >{item.DeviceName}</div>
          <div className="rTableCell" >{item.BoxTruckClickCount}</div>
          <div className="rTableCell" >{item.BoomTruckClickCount}</div>
          <div className="rTableCell" >{item.ServiceTruckClickCount}</div>
          <div className="rTableCell" >{item.BoxTruckSidewallBondingClickCount}</div>
          <div className="rTableCell" >{item.BoxTrkSidewallBondingInterestsMe}</div>
          <div className="rTableCell" >{item.BoxTruckRoofBondingClickCount}</div>
          <div className="rTableCell" >{item.BoxTrkRoofBondingInterestsMe}</div>
          <div className="rTableCell" >{item.BoxTruckDoorClosuresClickCount}</div>
          <div className="rTableCell" >{item.BoxTrkDoorClosuresInterestsMe}</div>
          <div className="rTableCell" >{item.BoomTruckSeamSealingClickCount}</div>
          <div className="rTableCell" >{item.SeamSealingInterestsMe}</div>
          
      </div>
      )
      )

  }

    return (
      <div className='body' >
        <h2>Showing all results for Automotive searches on Lord site</h2>
    
        <div className="rTable">
          <div className="rTableRow">
            <div className="rTableHead"><strong>Company Name</strong></div>
            <div className="rTableHead"><strong>Name</strong></div>
            <div className="rTableHead"><strong>E-Mail</strong></div>
            <div className="rTableHead"><strong>Date</strong></div>
            <div className="rTableHead"><strong>Device</strong></div>
            <div className="rTableHead"><strong>Box Trk Clicks</strong></div>
            <div className="rTableHead"><strong>Boom Trk Clicks</strong></div>
            <div className="rTableHead"><strong>Service Trk Clicks</strong></div>
            <div className="rTableHead"><strong>Box Trk Sidewall Bonding Clicks</strong></div>
            <div className="rTableHead"><strong>Interests Me?</strong></div>
            <div className="rTableHead"><strong>Box Trk Roof Bonding Clicks</strong></div>
            <div className="rTableHead"><strong>Interests Me?</strong></div>
            <div className="rTableHead"><strong>Box Trk Door Closure Clicks</strong></div>
            <div className="rTableHead"><strong>Interests Me?</strong></div>
            <div className="rTableHead"><strong>Boom Trk Sealing Clicks</strong></div>
            <div className="rTableHead"><strong>Interests Me?</strong></div>
          </div>
        
          {showResults()}

          </div> 
 
      </div>
    )
  }
} 