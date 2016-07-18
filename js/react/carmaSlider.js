define(function() {
	return {
		initSlider: function() {
			var SilderComponent = React.createClass({
				getInitialState: function() {
					return {
						ImageUrl: '',
						Title: '',
						SubTitle: '',
						Description: '',
						Error: '',
						ResultSet: [],
						count: 0
					};
				},
				componentDidMount: function() {
					var options = {};
					this.serverRequest = $.ajax({
						type: "POST",
						url: this.props.source,
						// Tell jQuery we're expecting JSON
						dataType: "json",
						// Tell YQL what we want and that we want JSON
						data: {
							TimeStamp: carmaApp.timeStamp,
							RequestGuid: carmaApp.requestGuid
						},
						// Work with the response
						success: function(response) {
							var collection = response.Payload.StepList;
							console.log(collection);
							console.log(JSON.stringify(response)); // server response
							if (this.isMounted()) {
								this.setState({
									ResultSet: collection
								});
							}
						}.bind(this)
					});
				},
				componentWillMount: function(){
				setTimeout(function(){ 
				$("#myCarousel").carousel({
					  swipe: 30 
					});	
				$('#myCarousel').on('slide.bs.carousel', function () {
					   var currentIndex = $('#myCarousel div.active').index() + 1;
					  if( currentIndex == 4)  { 
					  $("#myCarousel .btn-danger span:nth-child(1)").removeClass("fa fa-spinner fa-spin");
					  $("#myCarousel .btn-danger span:nth-child(2)").text("Ready to Sell!");   
					  } else { 
					  $("#myCarousel .btn-danger span:nth-child(1)").addClass("fa fa-spinner fa-spin");
					  $("#myCarousel .btn-danger span:nth-child(2)").text("loading...");
					  }
					});	
				 }, 1500);
				},
				render: function() {
					var results = this.state.ResultSet || [];
					console.log(results)
					return (<div className="container">
							  <br/>
							  <div id="myCarousel" className="carousel slide" data-ride="carousel">
							  		<ol className="carousel-indicators">
									  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
									  <li data-target="#myCarousel" data-slide-to="1"></li>
									  <li data-target="#myCarousel" data-slide-to="2"></li>
									  <li data-target="#myCarousel" data-slide-to="3"></li><br/>
									  <button className="btn btn-lg btn-danger"><span className="fa fa-spinner fa-spin"></span> <span className="text-loading">Loading... </span></button>
									</ol>
									 <div className="carousel-inner" role="listbox">
									{results.map(function(result, i) {
										 
										return (
												<div className={i==0 ? 'item active': 'item'} data-id={i}>
													<div className="col-xs-12 col-md-6 col-lg-6"><img src={result.ImageUrl} width="auto" /></div>
														<div className="carousel-captions col-xs-12 col-md-6 col-lg-6">
														<span className="title">{result.Title}</span> <span className="subTitle">{result.SubTitle}</span>
														<p className="description">{result.Description}</p>
													</div>
												</div> 
										);
									  
									})}
							 </div>
														
								  	<a className="right carousel-control hidden-xs hidden-sm hidden-md" href="#myCarousel" role="button" data-slide="next">
									<span className="fa fa-angle-right glyphicon-chevron-right" aria-hidden="true"></span>
									<span className="sr-only">Next</span></a>
							  </div>
							</div>);
				}
			});
			var SliderList = React.createClass({
				render: function() {
					return (<div className="item active" key={i}>
	  							<div className="col-xs-12 col-lg-6"><img src={this.props.data.ImageUrl}  /></div>
									<div className="carousel-captions col-xs-12 col-lg-6">
									<h1>Chania</h1> <h3></h3>
									<p>The atmosphere in Chania has a touch of Florence and Venice.</p>
									</div>
							</div>);
				}
			});
			ReactDOM.render(<SilderComponent source={carmaApp.url} />, document.getElementById('carma-slider'));
		}
	};
});