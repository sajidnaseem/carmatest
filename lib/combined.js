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
// JavaScript Document
define(function() {
	return {
		initChat: function() {
			var ChatComponent = React.createClass({displayName: "ChatComponent",
				getInitialState: function() {
					return {
						Error: '',
						ResultSet: [],
						count: 0
					};
				},
				componentDidMount: function() {
				$(".tooltip1").click(function(){  $(".msg_container_base, .panel-footer").toggle();   });
				},
				render: function() {
					return (
							React.createElement("div", {className: "container"}, 
								React.createElement("div", {className: "row chat-window col-xs-5 col-md-3", id: "chat_window_1"}, 
									React.createElement("div", {className: "col-xs-12 col-md-12"}, 
										React.createElement("div", {className: "panel panel-default"}, 
											React.createElement("div", {className: "panel-heading top-bar"}, 
												React.createElement("div", {className: "col-md-12 col-xs-12"}, 
													React.createElement("h3", {className: "panel-title"}, React.createElement("span", null, " 24 "), " online -", React.createElement("a", {title: "This is some information for our tooltip.", className: "tooltip1"}, " click here to chat")), " ")
												), 
											React.createElement("div", {className: "panel-body msg_container_base"}, 
												React.createElement("div", {className: "row msg_container base_sent"}, 
													React.createElement("div", {className: "col-md-10 col-xs-10"}, 
														React.createElement("div", {className: "messages msg_sent"}, 
															React.createElement("p", null, "that mongodb thing looks good, huh? tiny master db, and huge document store"), " ", React.createElement("time", {datetime: "2009-11-13T20:00"}, "Timothy • 51 min"), " ")
													), 
												React.createElement("div", {className: "col-md-2 col-xs-2 avatar"}, " ", React.createElement("img", {src: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg", className: " img-responsive"}), " ")
												), 
												React.createElement("div", {className: "row msg_container base_receive"}, 
												React.createElement("div", {className: "col-md-2 col-xs-2 avatar"}, " ", React.createElement("img", {src: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg", className: " img-responsive"}), " "), 
													React.createElement("div", {className: "col-md-10 col-xs-10"}, 
														React.createElement("div", {className: "messages msg_receive"}, 
															React.createElement("p", null, "that mongodb thing looks good, huh? tiny master db, and huge document store"), " ", React.createElement("time", {datetime: "2009-11-13T20:00"}, "Timothy • 51 min"), " ")
													)
												), 
												React.createElement("div", {className: "row msg_container base_receive"}, 
												React.createElement("div", {className: "col-md-2 col-xs-2 avatar"}, " ", React.createElement("img", {src: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg", className: " img-responsive"}), " "), 
													React.createElement("div", {className: "col-xs-10 col-md-10"}, 
														React.createElement("div", {className: "messages msg_receive"}, 
															React.createElement("p", null, "that mongodb thing looks good, huh? tiny master db, and huge document store"), " ", React.createElement("time", {datetime: "2009-11-13T20:00"}, "Timothy • 51 min"), " ")
													)
												)
											), 
											React.createElement("div", {className: "panel-footer"}, 
												React.createElement("div", {className: "input-group"}, " ", React.createElement("input", {id: "btn-input", type: "text", className: "form-control input-sm chat_input", placeholder: "Write your message here..."}), " ", React.createElement("span", {className: "input-group-btn"}, 
																				React.createElement("button", {className: "btn btn-primary btn-sm", id: "btn-chat"}, "Send")
																				), " ")
											)
										)
									)
								), 
								React.createElement("div", {className: "btn-group dropup"}, 
									React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
										React.createElement("li", null, React.createElement("a", {href: "#", id: "new_chat"}, React.createElement("span", {className: "glyphicon glyphicon-plus"}), " Novo")), 
										React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-list"}), " Ver outras")), 
										React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-remove"}), " Fechar Tudo")), 
										React.createElement("li", {className: "divider"}), 
										React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-eye-close"}), " Invisivel"))
									)
								)
						)
					);
				}
			});
			ReactDOM.render(React.createElement(ChatComponent, {source: "https://stagingservices.drivecarma.ca/Api/Misc/SplashScreen/Content"}), document.getElementById('carma-chat'));
		}
	};
});