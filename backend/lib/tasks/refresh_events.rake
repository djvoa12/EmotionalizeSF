desc "pull EDM shows from sfbayedm.com"
task :refresh_events => :environment do
  edm_events = Content.new
  edm_events.refresh
end