require 'elasticsearch/model'

class Business < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  def self.search(query)
    __elasticsearch__.search(
      {
        from: 0, size: 100,
        query: {
          match_phrase_prefix: {
            name: query
          }
        }
      }
    )
  end
end
