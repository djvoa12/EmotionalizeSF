class Content
  attr_reader :page

  def initialize
    mechanize = Mechanize.new
    @page = mechanize.get("http://www.sfbayedm.com")
  end

  def refresh
    results = page.search("p")
    results.each do |result|
      array = result.children[0].to_s.gsub(/\u2022/,'-').split('-')

      if array.length < 2
        next
      else
        date = Date.strptime(array[0][0..-2], '%m.%d.%Y')
        title = array[2][1..-2]
        venue = array[3][1..-2]

        Event.create!(date: date, title: title, venue: venue)
      end
    end
  end
end