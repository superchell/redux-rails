class FillItems < ActiveRecord::Migration[5.1]
  def change
    0.upto(10) do |i|
      n = Item.new
      n.name = "Item name #{i}"
      n.text = "Item text #{i}"
      n.save!
    end
  end
end
