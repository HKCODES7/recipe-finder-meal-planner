import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: true
})
export class RecipeCard {
  @Prop() recipeId!: string;
  @Prop() recipeTitle!: string;
  @Prop() imageUrl = '';
  @Prop() category = '';
  @Prop() isFavorite = false;
  @Prop() showEdit = false;
  @Prop() editUrl = '';

  @Event() favoriteToggled!: EventEmitter<{ recipeId: string }>;
  @Event() detailsRequested!: EventEmitter<{ recipeId: string }>;
  @Event() deleteRequested!: EventEmitter<{ recipeId: string }>;

  private handleImageError(event: Event) {
    const image = event.target as HTMLImageElement;
    image.style.display = 'none';
  }

  render() {
    return (
      <article>
        {this.imageUrl && (
          <img
            src={this.imageUrl}
            alt={this.recipeTitle}
            onError={(event) => this.handleImageError(event)}
          />
        )}

        <div class="body">
          {this.category && <small>{this.category}</small>}
          <h3>{this.recipeTitle}</h3>
          <slot></slot>

          <div class="actions">
            <button
              type="button"
              class="primary"
              onClick={() =>
                this.detailsRequested.emit({ recipeId: this.recipeId })
              }
            >
              View details
            </button>

            <button
              type="button"
              aria-pressed={String(this.isFavorite)}
              onClick={() =>
                this.favoriteToggled.emit({ recipeId: this.recipeId })
              }
            >
              {this.isFavorite ? 'Remove favorite' : 'Favorite'}
            </button>

            {this.showEdit && this.editUrl && (
              <a class="edit" href={this.editUrl}>
                Edit
              </a>
            )}

            {this.showEdit && (
              <button
                type="button"
                class="danger"
                onClick={() =>
                  this.deleteRequested.emit({ recipeId: this.recipeId })
                }
              >
                Delete
              </button>
            )}
          </div>

          <slot name="actions"></slot>
        </div>
      </article>
    );
  }
}
