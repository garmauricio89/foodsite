# main.rb

require "sendgrid-ruby"
require 'sinatra'
require 'sinatra/flash'

enable :sessions

get "/home" do
	erb :home
end

get "/recipe" do
	erb :recipe
end

get '/mealplans' do
	erb :meal_plans
end

get '/contact' do
  erb :contact
end


get '/contact' do
  erb :contact
end

post '/contact' do
    #to do: process the email sending
    # our sendgrid code should be here
    from = SendGrid::Email.new email: params[:email]
    subject = params[:subject]
    to = SendGrid::Email.new email: "garmauricio89@gmail.com"

    content = SendGrid::Content.new(
        type: 'plain/text',
        value: params[:comment]
    )

    mail = SendGrid::Mail.new(from,subject,to,content)

    sg = SendGrid::API.new( api_key: ENV['SENDGRID_API_KEY'])

    response = sg.client.mail._('send').post(request_body: mail.to_json)

    #params.inspect
    response.inspect
   flash[:confirm] = "Thanks!"

   redirect '/contact'


end





