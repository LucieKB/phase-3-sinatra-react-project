class Student < ActiveRecord::Base
    has_many :goals, dependent: :destroy
end