from django.contrib import admin
from .models import donate,tracker
# Register your models here.

# admin.site.register(donate)
class tracker_admin_inline(admin.StackedInline):
    model=tracker
@admin.register(donate)
class donateAdmin(admin.ModelAdmin):
    list_display=["name","quantity"]
    inlines = [tracker_admin_inline]

admin.site.register(tracker)