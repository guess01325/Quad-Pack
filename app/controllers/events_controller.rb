class EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]
  before_action :authorize_request, except: %i[index show]
  # GET /events
  def index
    @events = Event.all
    render json: @events
  end

  # GET /events/[:id]
  def show
    render json: @event, include: :luggages
  end

  # POST /events/
  def create
    @event = Event.new(event_params)
    @event.user = @current_user
    if @event.save
      render json: @event, status: :created
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PUT /events/[:id]
  def update
    if @event.update(event_params)
      render json: @event, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @event.destroy
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def post_params
    params.require(:event).permit(:date, :venue, :city)
  end
end
