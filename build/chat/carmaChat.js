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