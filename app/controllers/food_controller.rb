class FoodTrackersController < ApplicationController
  before_action :set_food_tracker, only: [:show, :update, :destroy]

  def index
    @food_trackers = FoodTracker.all
    render json: @food_trackers
  end

  def show
    render json: @food_tracker
  end

  def create
    @food_tracker = FoodTracker.new(food_tracker_params)

    if @food_tracker.save
      render json: @food_tracker, status: :created
    else
      render json: @food_tracker.errors, status: :unprocessable_entity
    end
  end

  def update
    if @food_tracker.update(food_tracker_params)
      render json: @food_tracker
    else
      render json: @food_tracker.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @food_tracker.destroy
  end

  private

  def set_food_tracker
    @food_tracker = FoodTracker.find(params[:id])
  end

  def food_tracker_params
    params.require(:food_tracker).permit(:name, :breed)
  end
end
