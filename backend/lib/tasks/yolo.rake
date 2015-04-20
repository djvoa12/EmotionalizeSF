namespace :db do
  desc "Because life is short..."
  task :yolo => ["db:drop", "db:create", "db:migrate", "refresh_events"]
end