class LuggagesController < ApplicationController
    before_action :set_luggage, only: [:show, :update, :destroy]
    before_action :authorize_request, except: [:index, :show]
    before_action :set_event, only: [:index, :create]

   # GET /events
    def index
      @luggage = Luggage.where(event:@event)
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
