import React from 'react'
import Navbar from '../../Component/Navbar'
import Header from '../../Component/Header'

function Index() {
  return (

        <>

 
 
  <section>
    {/* sidebar menu start */}
    <div className="sidebar-menu sticky-sidebar-menu">
      {/* logo start */}
      <div className="logo">
        <h1>
          <a href="index.html">Collective</a>
        </h1>
      </div>
      {/* if logo is image enable this */}
      {/* image logo --
    <div class="logo">
<a href="index.html">
  <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
</a>
    </div>
    <!-- //image logo */}
      
      {/* //logo end */}
      
        {/* sidebar nav start */}
        <Navbar/>
        {/* //sidebar nav end */}
        {/* toggle button start */}
        <a className="toggle-btn">
          <i className="fa fa-angle-double-left menu-collapsed__left">
            <span>Collapse Sidebar</span>
          </i>
          <i className="fa fa-angle-double-right menu-collapsed__right" />
        </a>
        {/* //toggle button end */}
      </div>
  
    {/* //sidebar menu end */}
    {/* header-starts */}
    <Header/>
      {/* notification menu start */}
      
    {/* main content start */}
    <div className="main-content">
      {/* content */}
      <div className="container-fluid content-top-gap">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        <div className="welcome-msg pt-3 pb-4">
          <h1>
            Hi <span className="text-primary">John</span>, Welcome back
          </h1>
          <p>Very detailed &amp; featured admin.</p>
        </div>
        {/* statistics data */}
        <div className="statistics">
          <div className="row">
            <div className="col-xl-6 pr-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-users"> </i>
                    <h3 className="text-primary number">29.75 M</h3>
                    <p className="stat-text">Nearby Men:</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-eye"> </i>
                    <h3 className="text-secondary number">51.25 K</h3>
                    <p className="stat-text">Hotspot Identification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pl-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cloud-download"> </i>
                    <h3 className="text-success number">166.89 M</h3>
                    <p className="stat-text">Gesture Alert</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cart"> </i>
                    <h3 className="text-danger number">1,250k</h3>
                    <p className="stat-text">Alert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //statistics data */}
        {/* charts */}
        <div className="chart">
          <div className="row">
            <div className="col-lg-6 pr-lg-2 chart-grid">
              <div className="card text-center card_border">
                <div className="card-header chart-grid__header">Pie Chart</div>
                <div className="card-body">
                  {/* bar chart */}
                  <div id="container">
                    <canvas id="barchart" />
                  </div>
                  {/* //bar chart */}
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                  Updated 2 hours ago
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-2 chart-grid">
              <div className="card text-center card_border">
                <div className="card-header chart-grid__header">Line Chart</div>
                <div className="card-body">
                  {/* line chart */}
                  <div id="container">
                    <canvas id="linechart" />
                  </div>
                  {/* //line chart */}
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //charts */}
       
      </div>
      {/* //content */}
    </div>
    {/* main content end*/}
  </section>
  {/*footer section start*/}
  <footer className="dashboard">
    <p>
      © 2020 Collective. All Rights Reserved | Design by{" "}
      <a href="https://w3layouts.com/" target="_blank" className="text-primary">
        W3layouts.
      </a>
    </p>
  </footer>
  {/*footer section end*/}
  {/* move top */}
  <button
    onclick="topFunction()"
    id="movetop"
    className="bg-primary"
    title="Go to top"
  >
    <span className="fa fa-angle-up" />
  </button>
  {/* /move top */}
  {/* chart js */}
  {/* //chart js */}
  {/* Different scripts of charts.  Ex.Barchart, Linechart */}
  {/* //Different scripts of charts.  Ex.Barchart, Linechart */}
  {/* close script */}
  {/* //close script */}
  {/* disable body scroll when navbar is in active */}
  {/* disable body scroll when navbar is in active */}
  {/* loading-gif Js */}
  {/*// loading-gif Js */}
  {/* Bootstrap Core JavaScript */}
</>


  )
}

export default Index