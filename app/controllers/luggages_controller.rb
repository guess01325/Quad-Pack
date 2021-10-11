class LuggagesController < ApplicationController
  before_action :set_luggage, only: %i[show update destroy]
  before_action :authorize_request, except: [:show]
  before_action :set_event, only: %i[index create]

  # GET /events/eventID/luggages
  def index
    @luggage = Luggage.where(event: @event).where(user: @current_user)
    render json: @luggage
  end

  # GET /luggages/id
  def show
    render json: @luggage
  end

  # POST /event/event_id/luggages
  def create
    @luggage = Luggage.new(luggage_params)
    @luggage.user = @current_user
    # check this out:  @luggage.event = Event.find(params[:event_id])
    @luggage.event = @event
    if @luggage.save
      render json: @luggage, status: :created
    else
      render json: @luggage.errors, status: :unprocessable_entity
    end
  end

  # PUT /luggage/[:id]
  def update
    if @luggage.update(luggage_params)
      render json: @luggage, status: :ok
    else
      render json: @luggage.errors, status: :unprocessable_entity
    end
  end

  # delete /luggages/id
  def destroy
    @luggage.destroy
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

  def set_luggage
    @luggage = Luggage.find(params[:id])
  end

  def luggage_params
    params.require(:luggage).permit(:name, :amount)
  end
end
