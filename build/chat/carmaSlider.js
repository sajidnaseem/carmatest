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
				render: function() {
					return (
							React.createElement("div", {class: "container"}, 
								React.createElement("div", {class: "row chat-window col-xs-5 col-md-3", id: "chat_window_1", style: "margin-left:10px;"}, 
									React.createElement("div", {class: "col-xs-12 col-md-12"}, 
										React.createElement("div", {class: "panel panel-default"}, 
											React.createElement("div", {class: "panel-heading top-bar"}, 
												React.createElement("div", {class: "col-md-12 col-xs-12"}, 
													React.createElement("h3", {class: "panel-title"}, React.createElement("span", null, " 24 "), " online -", React.createElement("a", {title: "This is some information for our tooltip.", class: "tooltip1"}, " click here to chat")), " ")
												), 
											React.createElement("div", {class: "panel-body msg_container_base", style: "display:none"}, 
												React.createElement("div", {class: "row msg_container base_sent"}, 
													React.createElement("div", {class: "col-md-10 col-xs-10"}, 
														React.createElement("div", {class: "messages msg_sent"}, 
															React.createElement("p", null, "that mongodb thing looks good, huh? tiny master db, and huge document store"), " ", React.createElement("time", {datetime: "2009-11-13T20:00"}, "Timothy • 51 min"), " ")
													), 
												React.createElement("div", {class: "col-md-2 col-xs-2 avatar"}, " ", React.createElement("img", {src: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg", class: " img-responsive"}), " ")
												), 
												React.createElement("div", {class: "row msg_container base_receive"}, 
												React.createElement("div", {class: "col-md-2 col-xs-2 avatar"}, " ", React.createElement("img", {src: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg", class: " img-responsive"}), " "), 
													React.createElement("div", {class: "col-md-10 col-xs-10"}, 
														React.createElement("div", {class: "messages msg_receive"}, 
															React.createElement("p", null, "that mongodb thing looks good, huh? tiny master db, and huge document store"), " ", React.createElement("time", {datetime: "2009-11-13T20:00"}, "Timothy • 51 min"), " ")
													)
												), 
												React.createElement("div", {class: "row msg_container base_receive"}, 
												React.createElement("div", {class: "col-md-2 col-xs-2 avatar"}, " ", React.createElement("img", {src: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg", class: " img-responsive"}), " "), 
													React.createElement("div", {class: "col-xs-10 col-md-10"}, 
														React.createElement("div", {class: "messages msg_receive"}, 
															React.createElement("p", null, "that mongodb thing looks good, huh? tiny master db, and huge document store"), " ", React.createElement("time", {datetime: "2009-11-13T20:00"}, "Timothy • 51 min"), " ")
													)
												)
											), 
											React.createElement("div", {class: "panel-footer"}, 
												React.createElement("div", {class: "input-group"}, " ", React.createElement("input", {id: "btn-input", type: "text", class: "form-control input-sm chat_input", placeholder: "Write your message here..."}), " ", React.createElement("span", {class: "input-group-btn"}, 
																				React.createElement("button", {class: "btn btn-primary btn-sm", id: "btn-chat"}, "Send")
																				), " ")
											)
										)
									)
								), 
								React.createElement("div", {class: "btn-group dropup"}, " ", React.createElement("button", {type: "button", class: "btn btn-default dropdown-toggle", "data-toggle": "dropdown"}, 
																	React.createElement("span", {class: "glyphicon glyphicon-cog"}), 
																	React.createElement("span", {class: "sr-only"}, "Toggle Dropdown")
																), 
									React.createElement("ul", {class: "dropdown-menu", role: "menu"}, 
										React.createElement("li", null, React.createElement("a", {href: "#", id: "new_chat"}, React.createElement("span", {class: "glyphicon glyphicon-plus"}), " Novo")), 
										React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {class: "glyphicon glyphicon-list"}), " Ver outras")), 
										React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {class: "glyphicon glyphicon-remove"}), " Fechar Tudo")), 
										React.createElement("li", {class: "divider"}), 
										React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {class: "glyphicon glyphicon-eye-close"}), " Invisivel"))
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