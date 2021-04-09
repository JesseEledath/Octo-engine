class FoodsController < ApplicationController
  # before_action :authorize_request
  before_action :set_food, only: [:show, :update, :destroy]

  def index
    @foods = Food.all
    render json: @foods
  end

  def show
    render json: @food
  end

  def create
    @food = Food.new(food_params)

    if @food.save
      render json: @food, status: :created
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @food.destroy
  end

  private

  def set_food
    @food = Food.find(params[:id])
  end

  def food_params
    params.require(:food).permit(:name, :breed)
  end
end
