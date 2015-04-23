class EventsController < ApplicationController
  def index
    response = []

    @events = Event.all

    @events.each do |event|
      response << { id: event.id, date: event.date, title: event.title, venue: event.venue }
    end

    render json: { events: response }
  end

  def show
    @event = Event.find(params["id"])

    response = { id: @event.id, date: @event.date, title: @event.title, venue: @event.venue }

    render json: { events: response }
  end
end
