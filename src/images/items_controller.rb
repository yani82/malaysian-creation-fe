class Api::V1::ItemsController < ApplicationController
  
    # before_action :set_category

    # /api/v1/categories/1/items 
    
    def index  
        items = Item.all 
        render json: items 
    end

    def show 
        item = Item.find(params[:id])
        render json: item 
    end

    def create
        # byebug;
        item = Item.create(name: item_params[:name], description: item_params[:description], price: item_params[:price], category_id: item_params[:category_id]) 
        # byebug; 
        render json: item 
        # item = category.items.new(item_params)
        # if category.name(item) != 'Item does not exist' 
        #     item.save
        #     render json: category 
        # else 
        #     render json: {error: 'Item does not exist'}
        # end 
    end

    def destroy
        # binding.pry
        item = Item.find(params[:id])
        # or["id"]? 
        category = Category.find(item.category_id)
        item.destroy
        render json: category 
    end

    private

    # def set_category
    #     category = Category.find(params[:category_id])
    # end 

    def item_params
        params.require(:item).permit(:category_id, :name, :description, :price, :item)
    end 
    

end
