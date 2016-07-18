define(function() {
	return {
		initSlider: function() {
			var SilderComponent = React.createClass({displayName: "SilderComponent",
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
					return (React.createElement("div", {className: "container"}, 
							  React.createElement("br", null), 
							  React.createElement("div", {id: "myCarousel", className: "carousel slide", "data-ride": "carousel"}, 
							  		React.createElement("ol", {className: "carousel-indicators"}, 
									  React.createElement("li", {"data-target": "#myCarousel", "data-slide-to": "0", className: "active"}), 
									  React.createElement("li", {"data-target": "#myCarousel", "data-slide-to": "1"}), 
									  React.createElement("li", {"data-target": "#myCarousel", "data-slide-to": "2"}), 
									  React.createElement("li", {"data-target": "#myCarousel", "data-slide-to": "3"}), React.createElement("br", null), 
									  React.createElement("button", {className: "btn btn-lg btn-danger"}, React.createElement("span", {className: "fa fa-spinner fa-spin"}), " ", React.createElement("span", {className: "text-loading"}, "Loading... "))
									), 
									 React.createElement("div", {className: "carousel-inner", role: "listbox"}, 
									results.map(function(result, i) {
										 
										return (
												React.createElement("div", {className: i==0 ? 'item active': 'item', "data-id": i}, 
													React.createElement("div", {className: "col-xs-12 col-md-6 col-lg-6"}, React.createElement("img", {src: result.ImageUrl, width: "auto"})), 
														React.createElement("div", {className: "carousel-captions col-xs-12 col-md-6 col-lg-6"}, 
														React.createElement("span", {className: "title"}, result.Title), " ", React.createElement("span", {className: "subTitle"}, result.SubTitle), 
														React.createElement("p", {className: "description"}, result.Description)
													)
												) 
										);
									  
									})
							 ), 
														
								  	React.createElement("a", {className: "right carousel-control hidden-xs hidden-sm hidden-md", href: "#myCarousel", role: "button", "data-slide": "next"}, 
									React.createElement("span", {className: "fa fa-angle-right glyphicon-chevron-right", "aria-hidden": "true"}), 
									React.createElement("span", {className: "sr-only"}, "Next"))
							  )
							));
				}
			});
			var SliderList = React.createClass({displayName: "SliderList",
				render: function() {
					return (React.createElement("div", {className: "item active", key: i}, 
	  							React.createElement("div", {className: "col-xs-12 col-lg-6"}, React.createElement("img", {src: this.props.data.ImageUrl})), 
									React.createElement("div", {className: "carousel-captions col-xs-12 col-lg-6"}, 
									React.createElement("h1", null, "Chania"), " ", React.createElement("h3", null), 
									React.createElement("p", null, "The atmosphere in Chania has a touch of Florence and Venice.")
									)
							));
				}
			});
			ReactDOM.render(React.createElement(SilderComponent, {source: carmaApp.url}), document.getElementById('carma-slider'));
		}
	};
});