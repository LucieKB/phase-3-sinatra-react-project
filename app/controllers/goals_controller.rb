class GoalsController < ApplicationController

    # get '/goals' do
    #     goals = Goal.all
    #     goals.to_json
    # end

    post '/goals' do
        goal= Goal.create(
            category: params[:category],
            description: params[:description],
            deadline: params[:deadline],
            achieved: params[:achieved],
            student_id: params[:student_id]
        )
        goal.to_json
        
    end

    delete '/goals/:id' do
        goal = Goal.find_by(id: params[:id])
        goal.destroy
        goal.to_json
    end


    patch '/goals/:id' do
        goal = Goal.find_by(id: params[:id])
        goal.update(
            category: params[:category],
            description: params[:description],
            deadline: params[:deadline],
            achieved: params[:achieved]
        )
        goal.to_json
    end


end